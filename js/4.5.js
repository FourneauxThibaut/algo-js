 // Function to calculate distance
function calcDistance(a, b)
{
    let aArr = a.split('.');
    let bArr = b.split('.');

    // Calculating distance
    return Math.sqrt(Math.pow(a[0] - a[1], b[1]) +
                Math.pow(b[1] - b[0], 2) * 1.0);
}

console.log( calcDistance(1.1, 2.2) );