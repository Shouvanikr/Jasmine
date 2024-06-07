function calculator()
{
    this.total=0;
};

calculator.prototype.add = function(number)
{
return (this.total += number);
};

calculator.prototype.substract = function(number)
{
    return (this.total -= number);

};

calculator.prototype.multiply = function(number)
{
    return (this.total *= number);

};

calculator.prototype.divide = function(number)
{
    if(number==0)
    {
        throw new Error ('Number can not be used to divide')
    }
    return (this.total /= number);

};