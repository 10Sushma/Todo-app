s=input()#hello world in a frame
strArr=s.split()#
maxlength=0
for i in strArr:
    if len(i)>maxlength:
        maxlength=len(i)
        5
print((maxlength+4) * '*') 
 
for i in strArr:
    if (maxlength)!=len(i):
        c=maxlength-len(i)+1#5-2=3
        print('*' +' '+i+(' ')*c+'*')
    else:
        print('*' +' '+i+' '+'*')  
        
print((maxlength+4) * '*')     
    
      
