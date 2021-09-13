package com.hw;

import java.util.Arrays;

public class ArrayHW {
    public static void main(String[] args){
        int[] nums = {100,234,525,3424};
        sum(nums);

        System.out.println("The output of question 2 is that the index is 2 which would be 6 in the array.");

        int[] result = toPower(4,2);
        System.out.println(Arrays.toString(result));
        /*


Write a public static method called "toPower" that takes in as parameters two
integers called size and power. The method should return an array of size "size"
with each array index raised to the value of "power." So, for example,
if we passed in "size = 4" and "power = 2" to the "toPower," the method should return the following result: [0,1,4,9].
         */

    }

    public static int[] toPower(int size, int power){
        int[] result = new int[size];
        for(int i = 0; i < result.length; i++){
            result[i] = (int) Math.pow(i, power);
        }
        return result;
    }

    public static void sum(int[] numArr){
        int sum = 0;
        for (int j : numArr) {
            sum += j;
        }
        System.out.println(sum);
    }
}
