target=a2
a=1
for i in {a..z};
do
  for j in {0..2};
  do
    echo "Call $a"
    if [[ "$i$j" == "$target" ]]
    then
      echo "Waiting for 'Hello' from the server"
    fi
    resp=`curl --silent localhost:8080?id=$(echo $i$j | perl -lpe '$_=unpack"B*"')`
    if [[ "$i$j" == "$target" ]]
    then
      if [[ "$resp" != "Hello" ]]
      then
        echo "Did not receive 'Hello' response"
      else
        echo "Got a 'Hello'! Good work"
      fi
    fi
    a=$(($a+1)) 
  done
done
