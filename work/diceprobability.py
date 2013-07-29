#probability distribution of rolling n dice
import random
N =1000

no_of_dice = 100;
def rollDice():
  #function to return random number between 1 and 6 (integers) inclusive
  x = random.random()
  d = 0
  if 0 <= x < 0.166:
    d = 1
  elif 0.166 <= x < 0.33:
    d = 2
  elif 0.33 <= x < 0.5:
    d = 3
  elif 0.5 <= x < 0.666:
    d = 4
  elif 0.666 <= x < 0.83:
    d = 5
  else:
    d = 6
  return d
  
def generateProbability():
  a=[]
  i=0
  for i in range(0,6*no_of_dice):
    a.append(0)

  i=0
  for i in range(0,N):
    '''
    p = rollDice()
    q = rollDice()
    a[int(p+q)-1]+=1
    #print(str(p)+'+'+str(q)+'='+str(p+q))
    '''
    j=0
    outcome=0
    for j in range(0,no_of_dice):
      outcome+=rollDice()
    a[int(outcome)-1]+=1

  print 'Number of trials : ', N
  #print a

  i=0
  for i in range(no_of_dice-1,len(a)):
    #print (i+1),'-',a[i]
    print a[i]

N=100000
while N <= 100000:
  generateProbability()
  N*=10