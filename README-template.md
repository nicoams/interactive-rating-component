# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

- Desktop:

![](./screenshots/Interactive%20Rating%20-%20Desktop.png)
![](./screenshots/Interactive%20Rating%20-%20Thank%20You%20Card%20Desktop.png)

- Mobile:

![](./screenshots/Interactive%20Rating%20-%20Mobile.png)
![](./screenshots/Interactive%20Rating%20-%20Thank%20You%20Card%20Mobile.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-rating-component-qFCyk8m53E)
- Live Site URL: [Github](https://nicoams.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Sass](https://sass-lang.com/) - CSS Prepprocessor
- JavaScript

### What I learned

When I was choosing which challenge I would do, I saw an opportunity on this one to explore Sass and JavaScript, the contents I recently started to learn. 

The rating buttons were a little tricky. I started with button tags, but I ended up with radio inputs. Styling this was not as easy as I tought it would be. I also discovered that wrapping inputs in labels would get the same result as the ``` for ``` attribute.

Even though it's a short project, I tried the modularization to explore some features of Sass, dividing the code into 3 modules: base (general styles), homePage (styles the rating card) and thankPage (styles the Thank You Card) and it worked nice. 

JavaScript was an adventure. I knew something about functions, objects, and things like that but I did not know how to manipulate DOM. I saw some content on the web and I got the variables structure, the submitForm and "rates.forEach..." from [TsbSankara](https://www.youtube.com/watch?v=cQnUopEeZgw). 

At this point I had achieved all the requirements of the project, but that ```innerHTML``` made me think about inserting a message when the user tried to submit the form without selecting an option.

After a lot of research I wrote the function below:

```js

function validateForm(){

    var radioChecked = document.querySelector("input[name=rate]:checked");
 
    if (!radioChecked){
        error.classList.remove("hidden")
        error.innerHTML = "Please, select an option below:";
    }
    else{
        return(submitForm());
    }
}
```
If there is no option selected, it will display the message "Please..." and if everything is ok, it will submit the form. I think it is a nice touch, but when the message shows up, the content is kind of pushed away. It was that or expand the card size. I thought the first option to be visually better.



### Continued development

I found manipulating DOM fascinating but I still have a lot to learn. Altough I achieved some of my goals here, I found some solutions a bit sloppy and I lack the knowledge to achieve the others. 

The one solution I think "there must be a better way to do this" every time I open the project is this one:

```css
#rating input{
    display: none;
}
```

The JS below will send the selected option to the message that shows which one was chosen out of all of them on the Thank You Card:

```js
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});
```
Without the css above, the output will receive all the html from rate (the radio button and the number because they were wrapped within the label) and it will look like this:

![](./screenshots/Radio%20exported%20to%20the%20output.png)

Now, the css above will hide the radio and leave out the number resulting on the required desing: 

![](./screenshots/Thank%20You%20Card.png)

About the other goal I had for this one: I wanted to enable keybord users to submit the form too. I remembered the warning about tabindex from the other challenge and thought about implementing it here. It was possible to navigate through the buttons, but I could not find a way to activate it. I intend to learn it in the near future. 

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - I discovered we could wrap inputs in labels here. Even though I did not use the ```:before``` or ```:after``` selectors, their tips were enlightening.
- [How to check a radio button using JavaScript?](https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript) - This one helped me build the "required" message function for the form. I had the logic worked out but I was missing the way to build it. I found it here.


## Author

- Frontend Mentor - [@nicoams](https://www.frontendmentor.io/profile/nicoams)

## Acknowledgments

I wanted to thank [Thomas Sankara](https://tsbsankara.com/) for sharing his knowledge with us. Through the brief time of the mencioned video I could not only learn new things, but also imagine lots of things to do with them. Thank you very much!
