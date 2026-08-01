//What is Node JS
/*

Open Source cross platform 

Orinoco Algorithm used by V8 Engine for Garbage Collection
JS is not Intepreted nor Compiled it is Hybrid Language
Which uses mechanism called JIT (Just in Time) Compilation

Process 
Code can be converted into abstract Syntax Tree
Then code convert into byte code which is not properly optimized and interpretation using Ignition
Then That Byte Code Converted into machine code which is higly Optimized and optimized by Compiler called Turbofan


Program Under Execution called process 
Client is a process not UI it sends Request
Server is also the process hich recieve request and send Response

Thread is lightweight process which share the same heap memory as parent process has

Apache is webserver that serve the static content
NGINX is Another One

Webserver serve static content
Application Server serve Dynamic Content
LIBUV handle node process
CPU Intensive => Uses Thread Pooling 
I/O Intensive => Not Using Thread Pooling 
By Deafult LIBUV have 4 thread 

Ticks => One Full Trip/Iteration of Event Loop

NextTick
   |
Microtask
   |
Combine Marotask
Timer 
IoQueue
Pooling
Check
Close     
*/
