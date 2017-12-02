Init array
>>> ++ ++
> ++ +
> ++ +
> ++ ++
[<]


>[<+>-]         copy first element to Tmp1
>[>]+[<]        mark first place for copy
<[>+[>]<+[<]>-] copy Tmp1 back to first and to the end
>[>]<-          remove mark from copy (dec)
[<]>            go back to first element
[               while there is something left
  [<<+>>-]+                      Tmp0=X; X=1
  >[<<<->+>>-]                   Tmp0=X-Y; Tmp1=Y; Y=0
  <<[>>+<<-]                     Y=Tmp1; Tmp1=0
  <[>>-<<[-]]                    X-= Tmp0==0 ? 0 : 1, Tmp0=0
  <[>+<-]>                       Tmp0+=Sum; Sum=0
  >>[>[<<<+>+>>-]<<[>>+<<-]>-]   Tmp0 += X==1 ? Y : 0, X=0;
  >                              i++
]
<<<             point to sum
