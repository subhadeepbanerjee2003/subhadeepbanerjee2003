`important css notes from first cohort class`

1. `padding` :- space between border and content , and it is inside the border 
   
2. `margin` :- space between border and other elements , and it is outside the border

3. difference between padding and margin is that padding is inside the border and margin is outside the border

4. we can use float proparty to make the elements float to the right or left but that is dumb way to do it because it will make the elements out of the normal flow of the page and we can't control it's position

5. so we use `flexbox` to control the position of the elements and it is the smart way to do it

6. we know two div elements can't be in the same line `but if we use display:flexbox on the parent div it will make all div siblings reside in the same line`

7. we can use `justify-content` proparty/attribute to control the position of the elements/siblings in the parent div
   
a) `justify-content: flex-start` :- will make the elements start from the left side of the parent div.it is the `default value`

b) `justify-content: flex-end` :- will make the elements start from the right side of the parent div

c) `justify-content: center` :- will make the elements start from the center of the parent div

d) `justify-content: space-between` :- will make the elements start from the left side of the parent div and the last element will be on the right side of the parent div

e) `justify-content: space-around` :- will make the elements start from the left side of the parent div and the last element will be on the right side of the parent div and the space between the elements will be equal

f) `justify-content: space-evenly` :- will make the elements start from the left side of the parent div and the last element will be on the right side of the parent div and the space between the elements will be equal and the space between the first element and the left side of the parent div and the last element and the right side of the parent div will be equal

8. 