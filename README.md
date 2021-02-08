# What is Fat Tony?

*The name is inspired by Tony Soprano for his "break the rules" approach, and also "Fat Tony" a recurring character in the works of Nassim Nicholas Taleb who embodies street smarts and thrift.*

The problem Fat Tony aims to solve is that when working with JavaScript it feels like a drag to pollute your codebase with lots of `thens` or import some crazy library or npm package (especially if what you REAAALLY want to do is grab the data from a fetch -- ONCE -- and then mutate it 6 ways from Sunday)!

While Fat Tony isn't a solution for every situation, **it enables you to capture data from a fetch essentially as a one off, so you can then work on it in your codebase, almost as if it were a regular variable.**  Granted, you need to write you code inside of a function which you pass to your declared invocation of `theFattestTony` but if you're prototyping something, and don't want to deal with the baggage of writing lots of functions when you aren't exactly sure what you'll need, or not -- then Fat Tony helps provide you with enough support to get you running quickly... as for `then`, Fat Tony works with it behind the scenes, but hopefully in a way that's unobtrusive enough to feel like an afterthought.

---

As Tony Soprano might say: *"The dog not only fetches, but it STAYS."*

