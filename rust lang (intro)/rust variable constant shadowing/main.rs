fn main() {
    let x = 20; // implicitly compiler decides that variable -> x is of integer type
                // x = "i am";  becuase x is integer and rust is statically typed so we can change the type
                // we can also manually explicitely say that x is of type int

    println!("x is : {}", x);

    /* x = 30;

    println!("x is : {}", x);  this will give error because x is immutable variable */
    // to avoid this we can use mut

    // second example
    let mut y = 30;

    println!("y is : {}", y);

    y = 40;

    println!("y is : {}", y);

    // third example we can also do
    let z = 50;
    println!("z is : {}", z);
    let z = 60;
    println!("z is : {}", z); // we have used let two times but that wont be any prob for rust because it will assume that we are overwritting value of z
}
