// Финансовый менеджер
class FinancialManager {
    constructor() {
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        this.budgets = JSON.parse(localStorage.getItem('budgets')) || {};
        this.categories = {
            income: ['Зарплата', 'Фриланс', 'Инвестиции', 'Подарки', 'Другое'],
            expense: ['Продукты', 'Транспорт', 'Развлечения', 'Здоровье', 'Одежда', 'Счета', 'Рестораны', 'Другое']
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDashboard();
        this.updateTransactions();
        this.updateBudget();
        this.updateReports();
        this.populateCategories();
    }

    // Функция форматирования чисел с разделителями тысяч
    formatNumber(num) {
        return num.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    setupEventListeners() {
        // Навигация
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection(link.dataset.section);
            });
        });

        // Сохранение транзакции
        document.getElementById('saveTransaction').addEventListener('click', () => {
            console.log('Кнопка saveTransaction нажата');
            this.saveTransaction();
        });

        // Инициализация категорий при открытии модального окна
        const modalElement = document.getElementById('addTransactionModal');
        modalElement.addEventListener('show.bs.modal', () => {
            this.updateCategoryOptions('transactionCategory');
            // Устанавливаем текущую дату по умолчанию
            const dateInput = document.getElementById('transactionDate');
            if (dateInput) {
                dateInput.value = new Date().toISOString().slice(0, 10);
            }
        });

        // Фильтры транзакций
        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.updateTransactions();
        });

        document.getElementById('typeFilter').addEventListener('change', () => {
            this.updateTransactions();
        });

        // Форма бюджета
        document.getElementById('budgetForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.setBudget();
        });

        // Изменение типа транзакции
        document.getElementById('transactionType').addEventListener('change', () => {
            this.updateCategoryOptions('transactionCategory');
        });

        // Изменение типа бюджета
        document.getElementById('budgetCategory').addEventListener('change', () => {
            this.updateCategoryOptions('budgetCategory');
        });
    }

    showSection(sectionId) {
        // Убираем активный класс со всех секций и ссылок
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Показываем нужную секцию
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }

        // Активируем нужную ссылку
        const link = document.querySelector(`[data-section="${sectionId}"]`);
        if (link) {
            link.classList.add('active');
        }
    }

    populateCategories() {
        // Инициализируем категории для транзакций
        this.updateCategoryOptions('transactionCategory');
        
        // Инициализируем категории для бюджета
        this.updateCategoryOptions('budgetCategory');
        
        // Заполняем фильтр категорий
        const categoryFilter = document.getElementById('categoryFilter');
        categoryFilter.innerHTML = '<option value="">Все категории</option>';
        
        // Добавляем все категории в фильтр
        Object.values(this.categories).flat().forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    updateCategoryOptions(selectId) {
        const select = document.getElementById(selectId);
        let type;
        
        if (selectId === 'transactionCategory') {
            const typeSelect = document.getElementById('transactionType');
            type = typeSelect ? typeSelect.value : 'income'; // По умолчанию income
        } else if (selectId === 'budgetCategory') {
            // Для бюджета показываем все категории расходов
            type = 'expense';
        } else {
            return;
        }
        
        select.innerHTML = '<option value="">Выберите категорию</option>';
        
        if (this.categories[type]) {
            this.categories[type].forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                select.appendChild(option);
            });
        }
    }

    saveTransaction() {
        console.log('Функция saveTransaction вызвана');
        
        const type = document.getElementById('transactionType').value;
        const category = document.getElementById('transactionCategory').value;
        const description = document.getElementById('transactionDescription').value;
        const amount = parseFloat(document.getElementById('transactionAmount').value);
        const date = document.getElementById('transactionDate').value;

        console.log('Значения формы:', { type, category, description, amount, date });

        if (!type || !category || !description || !amount || !date) {
            this.showAlert('Пожалуйста, заполните все поля', 'danger');
            return;
        }

        const transaction = {
            id: Date.now(),
            type,
            category,
            description,
            amount,
            date
        };

        console.log('Добавляем транзакцию:', transaction);

        this.transactions.push(transaction);
        this.saveToStorage();
        this.updateDashboard();
        this.updateTransactions();
        this.updateBudget();
        this.updateReports();
        
        // Закрываем модальное окно Bootstrap правильно
        const modalElement = document.getElementById('addTransactionModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
        
        this.showAlert('Транзакция добавлена успешно!', 'success');
        
        // Очищаем форму
        document.getElementById('transactionForm').reset();
    }

    setBudget() {
        const category = document.getElementById('budgetCategory').value;
        const amount = parseFloat(document.getElementById('budgetAmount').value);

        if (!category || !amount) {
            this.showAlert('Пожалуйста, заполните все поля', 'danger');
            return;
        }

        this.budgets[category] = amount;
        this.saveToStorage();
        this.updateBudget();
        this.showAlert('Бюджет установлен успешно!', 'success');
        
        document.getElementById('budgetForm').reset();
    }

    updateDashboard() {
        const currentMonth = new Date().toISOString().slice(0, 7);
        const monthlyTransactions = this.transactions.filter(t => 
            t.date.startsWith(currentMonth)
        );

        const totalIncome = monthlyTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const totalExpense = monthlyTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        const totalBalance = totalIncome - totalExpense;

        document.getElementById('totalBalance').textContent = this.formatNumber(totalBalance);
        document.getElementById('totalIncome').textContent = this.formatNumber(totalIncome);
        document.getElementById('totalExpense').textContent = this.formatNumber(totalExpense);
        document.getElementById('monthlyChange').textContent = this.formatNumber(totalBalance);

        // Последние транзакции
        this.updateRecentTransactions();
    }

    updateRecentTransactions() {
        const recentTransactions = this.transactions
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);

        const container = document.getElementById('recentTransactions');
        container.innerHTML = '';

        if (recentTransactions.length === 0) {
            container.innerHTML = '<p class="text-muted">Нет транзакций</p>';
            return;
        }

        recentTransactions.forEach(transaction => {
            const div = document.createElement('div');
            div.className = 'transaction-item';
            div.innerHTML = `
                <div class="transaction-info">
                    <div class="transaction-main">
                        <span class="transaction-description">${transaction.description}</span>
                        <span class="transaction-category">${transaction.category}</span>
                    </div>
                    <div class="transaction-amount ${transaction.type === 'income' ? 'positive' : 'negative'}">
                        ${transaction.type === 'income' ? '+' : '-'}₽${this.formatNumber(transaction.amount)}
                    </div>
                </div>
                <div class="transaction-date">${new Date(transaction.date).toLocaleDateString()}</div>
            `;
            container.appendChild(div);
        });
    }

    updateTransactions() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const typeFilter = document.getElementById('typeFilter').value;

        let filteredTransactions = this.transactions;

        if (categoryFilter) {
            filteredTransactions = filteredTransactions.filter(t => t.category === categoryFilter);
        }

        if (typeFilter) {
            filteredTransactions = filteredTransactions.filter(t => t.type === typeFilter);
        }

        filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

        const container = document.getElementById('allTransactions');
        container.innerHTML = '';

        if (filteredTransactions.length === 0) {
            container.innerHTML = '<p class="text-muted">Нет транзакций</p>';
            return;
        }

        filteredTransactions.forEach(transaction => {
            const div = document.createElement('div');
            div.className = 'transaction-item';
            div.innerHTML = `
                <div class="transaction-info">
                    <div class="transaction-main">
                        <span class="transaction-description">${transaction.description}</span>
                        <span class="transaction-category">${transaction.category}</span>
                    </div>
                    <div class="transaction-amount ${transaction.type === 'income' ? 'positive' : 'negative'}">
                        ${transaction.type === 'income' ? '+' : '-'}₽${this.formatNumber(transaction.amount)}
                    </div>
                </div>
                <div class="transaction-date">${new Date(transaction.date).toLocaleDateString()}</div>
            `;
            container.appendChild(div);
        });
    }

    updateBudget() {
        const container = document.getElementById('budgetList');
        container.innerHTML = '';

        if (Object.keys(this.budgets).length === 0) {
            container.innerHTML = '<p class="text-muted">Бюджеты не установлены</p>';
            return;
        }

        const currentMonth = new Date().toISOString().slice(0, 7);
        const monthlyExpenses = this.transactions
            .filter(t => t.type === 'expense' && t.date.startsWith(currentMonth))
            .reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + t.amount;
                return acc;
            }, {});

        Object.entries(this.budgets).forEach(([category, budget]) => {
            const spent = monthlyExpenses[category] || 0;
            const percentage = (spent / budget) * 100;
            const status = percentage > 100 ? 'danger' : percentage > 80 ? 'warning' : 'success';

            const div = document.createElement('div');
            div.className = 'budget-item';
            div.innerHTML = `
                <div class="budget-header">
                    <span class="budget-category">${category}</span>
                    <span class="budget-amount">₽${this.formatNumber(spent)} / ₽${this.formatNumber(budget)}</span>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-${status}" style="width: ${Math.min(percentage, 100)}%"></div>
                </div>
                <div class="budget-percentage">${percentage.toFixed(1)}%</div>
            `;
            container.appendChild(div);
        });
    }

    updateReports() {
        this.updateMonthlyChart();
        this.updateTopCategories();
    }

    updateMonthlyChart() {
        const ctx = document.getElementById('monthlyChart');
        if (!ctx) return;

        // Уничтожаем предыдущий график
        if (this.monthlyChart) {
            this.monthlyChart.destroy();
        }

        const months = [];
        const incomeData = [];
        const expenseData = [];

        // Получаем данные за последние 6 месяцев
        for (let i = 5; i >= 0; i--) {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            const monthKey = date.toISOString().slice(0, 7);
            const monthName = date.toLocaleDateString('ru-RU', { month: 'short' });
            
            months.push(monthName);
            
            const monthTransactions = this.transactions.filter(t => t.date.startsWith(monthKey));
            const income = monthTransactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);
            const expense = monthTransactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);
            
            incomeData.push(income);
            expenseData.push(expense);
        }

        this.monthlyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Доходы',
                    data: incomeData,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    tension: 0.1
                }, {
                    label: 'Расходы',
                    data: expenseData,
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    updateTopCategories() {
        const currentMonth = new Date().toISOString().slice(0, 7);
        const monthlyExpenses = this.transactions
            .filter(t => t.type === 'expense' && t.date.startsWith(currentMonth))
            .reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + t.amount;
                return acc;
            }, {});

        const sortedCategories = Object.entries(monthlyExpenses)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5);

        const container = document.getElementById('topCategories');
        container.innerHTML = '';

        if (sortedCategories.length === 0) {
            container.innerHTML = '<p class="text-muted">Нет данных</p>';
            return;
        }

        sortedCategories.forEach(([category, amount]) => {
            const div = document.createElement('div');
            div.className = 'category-item';
            div.innerHTML = `
                <span class="category-name">${category}</span>
                <span class="category-amount">₽${this.formatNumber(amount)}</span>
            `;
            container.appendChild(div);
        });
    }

    saveToStorage() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
        localStorage.setItem('budgets', JSON.stringify(this.budgets));
    }

    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Добавляем в начало body
        document.body.insertBefore(alertDiv, document.body.firstChild);
        
        // Удаляем через 3 секунды
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 3000);
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    const financialManager = new FinancialManager();
});
