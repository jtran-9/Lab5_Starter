# Lab 5 - Starter
Justin Tran <br>
Arjun Kohli <br>
Anthony Chapov

1) No, I would not use unit tests to test the message feature of a messaging application as I believe the message feature would involve too many moving parts where you're not only sending a message, but that message is supposed to be received by another user too. Those messages can't disappear either, they have to be saved forever to some sort of database. Since there are quite a few individual components that interact with each other, unit testing would probably not be the best option here.


2) Yes, I would use unit tests to test the “max message length” feature of a messaging application as unit testing can ensure that a simple feature like checking the message length functions as intended and this won't be affected by the other features either.
