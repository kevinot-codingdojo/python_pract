# def add(a,b):
#   x = a + b
#   return x
# # the return value gets assigned to the "result" variable
# result = add(3,5)
# print result # this should print 8
# def multiply(arr,num):
#     print arr, num
#     for x in arr:
#         print x
#         x *= num
#         print arr
#     return arr
# a = [2,4,10,16]
# b = multiply(a,5)
# print b
# output:
# >>>[2,4,10,16] 5
# >>>[2,4,10,16]
def multiply(arr,num):
    for x in range(len(arr)):
        arr[x] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b
