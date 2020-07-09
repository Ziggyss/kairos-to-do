# Kairos Job Application - Lisa Wilton

![](desktop3.gif)

Desktop view of the application

============================================================================

![](mobile2.gif)

Mobile view of the application

============================================================================


Thanks for checking out my Todo App. Here is a brief explanation about the decisions I made during this project:


## Tech Stack - React (with hooks), TailwindCSS, React-easy-flip (later removed)

I chose React for this project as it's what I have the most experience in using. I did consider learning Vue for this but I didn't really feel there was a good reason to do so as I could achieve everything I needed with React.

I didn't feel that Redux was necessary for this project as it's quite small and doesn't need to be particularly scalable. I used hooks and functional components throughout the app.

I did decide to learn one new thing through this process, and that was how to use Tailwindcss. It didn't have too much of a learning curve and I'm quite happy with how it turned out - a fairly clean design, but I think I only just scratched the surface with this library.

I implemented some animation with react-easy-flip but I removed it in the end, as I was unable to figure out a way of stopping it animating the list when doing the inline edit on any of the items. I thought it was better to remove it and have no animation at all, rather than having a really annoying animation that appears when using the app to do something that shouldn't cause too much of a visual distraction.

I added a few simple tests using React-testing-library.

## Design decisions

I moved the submit section to the bottom of the app, mainly for the mobile view, as I thought this would improve user experience on a small screen when using thumbs. I wanted to keep the design close to the original but with a few changes. 

I decided to enable users to toggle the checked items on and off and initially started out with words on buttons to enable this ("Done" and "Not Done") but I didn't like how it looked in the design so I changed these buttons to have icons instead.

I decided to omit a button for inline edit on the items as I wanted this functionality to be as unobtrusive as possible.

I decided to go for a line-through effect on completed items, rather than using a checkbox.

## Challenges

Whilst creating this project I had to do a little bit of thinking to solve ordering the items by date with the checked items ordered by date above that but I found a way of making it work by separating the array into two sub arrays and then sorting them and joining them together. I think this is probably a fairly naive solution and there is probably a much more efficient way of doing it.

I hadn't actually used a datepicker before, so that was another little problem that needed to be solved at the time. I also had some initial problems ordering by date as I had looked online and found a multitude of complex solutions but, in the end, I found that it worked completely fine with a simple sort method.









