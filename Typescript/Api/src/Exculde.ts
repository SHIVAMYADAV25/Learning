// Exculde

// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.


type Event = 'click' | 'scroll' | 'mousemove';
// let u exclude some value 
type ExculdeEvent = Exclude <Event,'scroll'>// 'click' | 'mousemove'

const handleEvent = (event: ExculdeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click')// runs the console.log()

