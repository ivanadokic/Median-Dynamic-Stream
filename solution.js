import java.lang.*;
import java.util.*;
import java.util.stream.Collectors;

/**
Divide a dataset into two Heaps.
One Heap with lower half of numbers,another Heap with upper half of numbers.
At the peek of two heaps we are going two have two middle numbers of dataset.
If size of peaks are equal (dataset contains an even number of elements), get two peaks and find median.
If size of one heap is bigger then another (dataset contains an odd number of elements), median is a peak of biggest heap.

When a number comes we will first compare it with the current median and put it to the appropriate Heap. 
If the new integer value is less than the current median, we put it into the max-heap else we put it to the min-heap.
 */


public class Solution {

  //2. STEP addNumber method
  public static void addNumber(int number, PriorityQueue<Integer> lowers, PriorityQueue < Integer > highers) // take in number, priorityQueue of the lowers and highers 
if (lowers.size() == 0 || number < lowers.peek()) { //if lowers is empty or number belongs with lowers 
  lowers.add(number); //throw it into the lowers
} else { //otherwise
  highers.add(number)//throw it into highers 
}
  }

  // 3. STEP rebalance (rebalancing works by moving the largest element from the max-heap to the min-heap, or by moving the smallest element from the min-heap to the max-heap
public static void rebalance(PriorityQueue < Integer > lowers, PriorityQueue < Integer > highers) {
  PriorityQueue < Integer > biggerHeap = lowers.size() > highers.size() ? lowers : highers;
  PriorityQueue < Integer > smallerlHeap = lowers.size() > highers.size() ? highers : lowers;

  if (biggerHeap.size() - smallerHeap.size() >= 2) { //if they are off by at least 2 we need to rebalance
    smallHeap.add(biggerHeap.poll());//take one of the elements from bigger Heap and add it to the smaller HEap
    //poll is going to poll off the top element, remove it and return the element
  }

}

// 4. STEP getMedian (will look into two HEap sizes, if they are different take the top element form the larger HEap)
public static void getMedian(PriorityQueue < Integer > lowers, PriorityQueue < Integer > highers) {
  PriorityQueue < Integer > biggerHeap = loweres.size() > highers.size() ? loweres : highers;
  PriorityQueue < Integer > smallerlHeap = highers.size() > highers.size() ? highers : lowers;
  if (biggerHeap.size() == smallerHeap.size()) {//average the medians otherwise 
    return ((double).biggerHeap.peek() + smallerHeap.peek()) / 2;//get the top and average them, we use here double not to run into errors with integer division
  } else {
    return biggerHeap.peek();
  }
}
// 1. STEP 
public static double[] getMedians(int[] array) {//function called get median back take an integer array and return array of doubles; we need to use doubles to store median because median can be average of two integers
  PriorityQueue < Integer > lowers = new PriorityQueue<Integer>(new Comparator<Integer>() { // those are  java PriorityQueues implemented with HEaps; lowers the Heap for the lower portion of numbers (max heap)
    public int compare(Integer a, Integer b) { //custom comparator that will put the biggest elements on top
      return -1 * a.compareTo(b);
    }
  });
  PriorityQueue < Integer > highers = new PriorityQueue<Integer>(); //min Heap
  double[] medians = new double[array.length];
  for (int i = o; i < array.length; i++) {//iterate through all values in the array
    int number = array[i]; //get the number out of the array
    addNumber(number, lowers, highers); //add to HEap
    rebalance(lowers, highers); //rebalance so each heap can have roughly half numbers 
    medians[i] = getMedian(lowers, highers); // get median back
  }
  return medians;//return that value
}

  public static void main(String[] args) { }
}
}






