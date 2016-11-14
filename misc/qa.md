# Q & A

> What is the general importance of the built-in JavaScript Math library?

The built-in JavaScript Math library is often a developer's first introduction to math in JavaScript. Developer's use it for generating unique ids, computing exponential back-off times, manipulating colors, animating, detecting collisions, rendering 3d graphics, simulating physics, calculating performance metrics, and much more. Almost all applications, server and browser alike, depend on the built-in Math library.


> How did you figure out the underlying implementations were not accurate, performant, and/or correct? How does this affect users when they work with this library?

We (co-authors and I) are currently developing libraries for numeric computing in JavaScript. As part of this work, we wrote libraries for higher order special functions, like gamma, beta, erf, and others. When testing our implementations against other environments (R, Python, Julia), we noticed that our results often deviated significantly from reference implementations. To our surprise, we discovered that much of the deviation was due to precision issues in the built-in JavaScript math library. Compounding problems, we noticed that precision varied across JavaScript engines.

For many common application tasks, minor deviations in precision are unlikely to have a significant effect. However, for numeric computing and applications requiring high precision, poor precision does have a significant effect due to accumulated error. Especially since the built-in Math functions are frequently used by higher-order functions, small deviations compounded many times can lead to significant drift from the "true" value.

Additionally, the ECMAScript specification for many Math functions does not require either a specific algorithm or a minimum precision. Algorithms are at the discretion of those implementing the specification, which means that browser vendors frequently implement different algorithms. Some vendors choose speed over precision, while others choose precision over speed. Because of cross-browser variability, applications cannot guarantee consistent numerical results, thus affecting portability. 


> What are some efforts taking place to fix this issue and/or what improvements are being made?

Over the past several years, various individuals on the ECMAScript technical committee (TC39) have raised the issue that the built-in Math library is underspecified. However, an updated specification does not seem likely anytime soon. While vendors seem open to a minimum precision requirement, they want to retain the ability to choose the underlying implementation.

Over the past two years, both the Firefox and Chrome teams have made efforts to standardize their Math implementations. Both teams chose FDLIBM for reference implementations. While these efforts are a step in the right direction, unless all vendors implement the same algorithm, individuals developing portable numeric compute applications must develop for the lowest common denominator; i.e., the vendor with the least precise and/or slowest algorithm.

Currently, community-driven solutions are spearheading most innovation with regard to math in JavaScript. I am part of one such effort, [stdlib](https://github.com/stdlib-js/stdlib). Our work provides robust, rigorous, and performant implementations for standard math functions. Each implementation is tested against multiple environments and measured against built-in equivalents. For many implementations, we have found that we can match and sometimes exceed the performance of built-in methods. Because our implementations are vendor independent, we avoid portability issues, ensuring consistent results across environments.


> Given that JavaScript is over 20 years old, why now? What has changed to fuel user demands for better Math libraries?

The big change is Node.js. Node.js gave JavaScript a legitimacy beyond being a toy language people used in the browser to build web applications. As companies continue to realize the benefit of fullstack JavaScript development, demand continues to grow for JavaScript numeric computing libraries in order to obviate the need for polyglot architectures.

Furthermore, browser applications have moved beyond mostly static applications and games. Applications now are increasingly sophisticated and increasingly leverage a user's own compute capacity. Part of the allure of numeric computing in JavaScript is to outsource what have traditionally been viewed as server-side computation tasks to client-side applications to decrease server load and increase application responsiveness.


> Is there anyway for people to get more involved in these efforts or to stay in the loop on what's being done here?

The easiest way to stay in the loop is to follow development of [stdlib](https://github.com/stdlib-js/stdlib), as we continue to develop facilities for numeric computation. To contribute, feel free to reach out to either [me](https://github.com/kgryte) or [Philipp Burckhardt](https://github.com/planeshifter), and we will be happy to get you started. To keep up-to-date with TC39, follow TC39 meeting [agendas](https://github.com/tc39/agendas) and Rick Waldron's corresponding [notes](https://github.com/rwaldron/tc39-notes). Lastly, follow Chrome and Firefox issue threads for additional built-in JavaScript Math library development.