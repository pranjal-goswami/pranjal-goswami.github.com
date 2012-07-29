/*
:: Simulator for Crusher Circulation ::

Pranjal Goswami
10CH10030

*/
#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<time.h>

#define SCREEN_RATIO_PIVOT 70 
#define RANGE 0.5 /* <delta> x in percentage*/

double getRatio(); // returns SCREEN_RATIO_PIVOT +/- RANGE %

void main()
{
  int rom; // Run of mines - input in inches
  int feed; // Feed Rate - input in units per hour to primary crusher
  double screen_ratio; // Screen Oversize : Undersize Ratio - pivots about SCREEN_RATIO_PIVOT <delta>x < RANGE;
  int i;
  int new_feed;
  int recirculation;
  double recirculation_load;
  double avg_recirculation_load;
 
  srand(time(NULL)); // Randomizing seed
  //scanf("%d",&feed);
  feed=100;  
  new_feed=feed;
  printf("Iteration \t Feed\t Recicultaion \t Output \t Recirculation Load\n");
  for(i=0;i<25;i++)
  {
    screen_ratio = getRatio();
    recirculation = (int)new_feed*screen_ratio;
    recirculation_load = (double) recirculation/feed*100;
    printf("%d \t %d \t %d \t %d \t %.2lf \%\n",i,new_feed,recirculation,new_feed-recirculation,recirculation_load);
    new_feed = feed + recirculation;
    
  }
  
}

double getRatio()
{
   double c;
   int sign;
   c=(double)rand()/RAND_MAX;
   c=c*RANGE;
   sign = (int)c%2?1:-1;
   c=SCREEN_RATIO_PIVOT+c*sign;
   return c/100.0;
  
}

