let example  = document.getElementById('example')

function press(x)
{
    example.value += x;
}

function clear1()
{
    example.value = '';
}

function result()
{
    example.value = eval(example.value);
}