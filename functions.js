/*
	Lexical scoping

	That is because javascript has what is referred to as lexical scoping or static scoping (those are buzz words in javascript).

What that means is the way that variable look-up or scope look-up happens, is where the functions are defined, not where they are run.

So even though the logDog() function is run inside of another function which has a locally scoped dog variable, it doesn't care about where it's run, it cares about where it is defined.

Because logDog() is defined where it is, since it doesn't have a local variable named dog, it will just go up one level.
*/