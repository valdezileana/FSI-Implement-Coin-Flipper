// TODO: Declare any global variables we need
let numHeads = 0
let numTails = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons DONE

    // Flip Button Click Handler
    document.getElementById('flip').addEventListener('click', () => {
        // TODO: Determine flip outcome
        let weFlippedHeads = Math.random() < 0.5
        // TODO: Update image and status message in the DOM
        if(weFlippedHeads){
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            // update number of heads
            numHeads += 1
        } else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            //update number of tails
            numTails += 1
        }

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let total = numTails + numHeads
        // Make variables to track the percentages of heads and tails
        let numHeadsPerc = 0
        let numTailsPerc = 0
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if(total > 0){
            numHeadsPerc = Math.round((numHeads/total) * 100)
            numTailsPerc = Math.round((numTails/total) * 100)
        }
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = numHeads
        document.getElementById('heads-percent').textContent = numHeadsPerc + '%'
        document.getElementById('tails').textContent = numTails
        document.getElementById('tails-percent').textContent = numTailsPerc + '%'
    })


    // Clear Button Click Handler
    document.getElementById('clear').addEventListener('click', () => {
        // TODO: Reset global variables to 0
        numHeads = 0
        numTails = 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = numHeads
        document.getElementById('heads-percent').textContent = 0 + '%'
        document.getElementById('tails').textContent = numTails
        document.getElementById('tails-percent').textContent = 0 + '%'

    })

})