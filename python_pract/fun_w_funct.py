def odd_even():
    for x in range(1, 2001):
        if x % 2 == 0:
            print x, " this is an even number."
        else:
            print x, " this is an odd number."
odd_even()


# Multiply section
a = [2,4,8,16]
b= 7
def multiply(a,b):
    i = 0
    while i <len(a):
        a[i] = b*a[i]
        i = i + 1
    print a
    return a
multiply(a,b)
