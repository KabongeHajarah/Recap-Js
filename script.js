// try to develop a program which
// calculate measure of central tendency of a 
///sample(mean, median, mode) and
// measure of variability(range, variance, standard deviation). 
//In addition to those measures find the min, max, count, percentile, 
//and frequency distribution of the sample.
// You can create a class called Statistics and
// create all the functions which do statistical calculations as method for the Statistics class. 

class Statistics {
  constructor(data) {
    this.data = data;
  }

  calculateMean() {
    const sum = this.data.reduce((acc, val) => acc + val, 0);
    return sum / this.data.length;
  }

  calculateMedian() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  calculateMode() {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];
    for (let i = 0; i < this.data.length; i++) {
      const num = this.data[i];
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        modes = [num];
      } else if (frequencyMap[num] === maxFrequency) {
        modes.push(num);
      }
    }
    return modes;
  }

  calculateRange() {
    const sortedData = this.data.sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map((num) => (num - mean) ** 2);
    const sumSquaredDifferences = squaredDifferences.reduce(
      (acc, val) => acc + val,
      0
    );
    return sumSquaredDifferences / this.data.length;
  }

  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  calculateMinimum() {
    return Math.min(...this.data);
  }

  calculateMaximum() {
    return Math.max(...this.data);
  }

  calculateCount() {
    return this.data.length;
  }

  calculatePercentile(percentile) {
    const sortedData = this.data.sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * this.data.length) - 1;
    return sortedData[index];
  }

  calculateFrequencyDistribution() {
    const frequencyMap = {};
    for (let i = 0; i < this.data.length; i++) {
      const num = this.data[i];
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    return frequencyMap;
  }
}

// Example usage:
const data = [2, 5, 8, 2, 9, 5, 8, 2, 1, 5];

const statistics = new Statistics(data);

console.log("Mean:", statistics.calculateMean());
console.log("Median:", statistics.calculateMedian());
console.log("Mode:", statistics.calculateMode());
console.log("Range:", statistics.calculateRange());
console.log("Variance:", statistics.calculateVariance());
console.log("Standard Deviation:", statistics.calculateStandardDeviation());
console.log("Minimum:", statistics.calculateMinimum());
console.log("Maximum:", statistics.calculateMaximum());
console.log("Count:", statistics.calculateCount());
console.log("Percentile")
//

let num = prompt('Enter number')
switch (true) {
  case num > 0:
    console.log('Number is positive')
    break
  case num == 0:
    console.log('Numbers is zero')
    break
  case num < 0:
    console.log('Number is negative')
    break
  default:
    console.log('Entered value was not a number')
}