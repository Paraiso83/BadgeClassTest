_Hint: The editor has auto complete on ctrl+space_

This is a small test aplication, were we have a list of inputs, that when changed will show/update a badge on their right.

### There are a few TODOs in following files:

(_Other files can also be changed_)

1. **app\\app.component.scss**

   - Having into account the **app\\app.component.html**, change the text _color_ of the **5th** input, inside the section `#container`, to the color red

2. **app\\time-counter\\time-counter.component.ts**

   - Define a numeric return value `counter`, so it can send information back to where the `my-time-counter` component is used
   - Using the `counter`, send the current **timestamp** information back
   - Make sure that before the component is unloaded the interval execution is cleared

3. **app\\app.component.html**

   - Handle the return information from `counter` of `my-time-counter` and write the value into the input `#text7`

4. **app\\app.component.ts**

   - Find a solution to show in the first input (`#lastBadgeText`) the last message sent to a Badge

5. **app\\badge\\badge.component.html**
   - Having into account the **app\badge\badge.component.html**, uncomment `console.log`, open the console on the bottom of the preview page, evalute the issue that exists and find a solution for it
