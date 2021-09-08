package com.hw;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class Main {


    public static void main(String[] args) {
        System.out.println("Please input 5 numbers.");
        numbers();
        System.out.println("Are you interested in a car? Please input model of the car: ");
        Scanner scan = new Scanner(System.in);
        String model = scan.next();
        System.out.println("Please input make of the car: ");
        String make = scan.next();
        dealer(model,make);
    }
	// Write a program that does the following:
        //Asks the user for 5 numbers
        //Stores them in an array list
        //Finds the sum, product, largest, and smallest of those numbers
        //
        //You are a car dealer. Create a hash map of vehicles.
        //The model is the Key, the make is the Value.
        //Ask the customer what car (model) they are looking for. Use the Hash Map to determine if you have that vehicle,
        // and what make it is.
        //(e.g. "Oh, you're looking for a Civic? Our Honda selection is right over here...")
        public static void numbers(){
            int sum = 0;
            int product = 1;
            int max = Integer.MIN_VALUE;
            int min = Integer.MAX_VALUE;
            Scanner scan = new Scanner(System.in);
            ArrayList<Integer> num_list = new ArrayList<>(5);
            for (int i = 0; i < 5; i++) {
                int number = scan.nextInt();
                num_list.add(number);
            }
            for (int i = 0; i < num_list.size(); i++) {
                int num = num_list.get(i);
                sum += num;
                product *= num;
                if (num > max) {
                    max = num;
                }
                if (num < min) {
                    min = num;
                }
            }
            System.out.println("Your sum is: " + sum);
            System.out.println("Your product is: " + product);
            System.out.println("Your max is: " + max);
            System.out.println("Your min is: " + min);
        }

        public static void dealer(String model, String make) {
            HashMap<String, String> vehicle = new HashMap<>();
            vehicle.put("Civic", "Honda");
            vehicle.put("Accord","Honda");
            vehicle.put("Altima","Niisan");
            vehicle.put("Edge","Ford");
            vehicle.put("Corolla","Toyota");
            if(vehicle.containsKey(model)){
                System.out.println("Oh, you're looking for a "+ model+ "? Our " + make +" selection is right over here...");
            }else{
                System.out.println("Sorry we don't have that make/model. Come back another time.");
            }
        }

    }
