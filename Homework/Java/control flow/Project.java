import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class Project {
    public static void main(String[] args) {
        AsciiChars.printNumbers();
        AsciiChars.printLowerCase();
        AsciiChars.printUpperCase();
        Scanner scan = new Scanner(System.in);
        System.out.println("Please enter your name: ");
        String name = scan.next();
        System.out.println("Hello " + name);
        System.out.println("Do you want to continue to the survey? Please enter yes or y.");
        String response = scan.next();
        if(response.equals("yes") || response.equals("y")){
            generateSurvey();
        }else {
            System.out.println("Please come again.");
        }
    }

    private static void generateSurvey() {
        Scanner scan = new Scanner(System.in);
        boolean reset = false;
        while(!reset){

            System.out.println("What is your favorite pet's name?");
            String name = scan.next();

            System.out.println("What is the age of your favorite pet.");
            checkInput(scan);
            int age = scan.nextInt();

            System.out.println("What is your lucky number?");
            checkInput(scan);
            int lucky = scan.nextInt();

            System.out.println("Do you have a favorite quarterback? If so what is their jersey number?");
            checkInput(scan);
            int jersey = scan.nextInt();

            System.out.println("What is two-digit model year of your car?");
            int year = checkRange(scan,0,99);

            System.out.println("What is the first name of your favorite actor or actress?");
            String fav = scan.next();

            System.out.println("Enter a random number between 1 and 50.");
            int random = checkRange(scan,1,50);

            System.out.println("Generating your lottery numbers.");
            int randomNum =  new Random().nextInt((75 - 1) + 1) + 1;
            int magicBall = lucky * randomNum;
            magicBall = checkLottoRange(magicBall,1,75);
            int num1 = year + lucky;
            num1 = checkLottoRange(num1,1,65);
            int num2 = random  - randomNum;
            num2 = checkLottoRange(num2,1,65);
            int num3 = fav.charAt(0);
            num3 = checkLottoRange(num3,1,65);
            int num4 = fav.charAt(fav.length()-1);
            num4 = checkLottoRange(num4,1,65);
            int num5 = jersey + age + lucky;
            num5 = checkLottoRange(num5,1,65);
            int[] numbers = {num1,num2,num3,num4,num5};
            Arrays.sort(numbers);
            System.out.printf("Lottery numbers: %s, %s, %s, %s, %s  Magic ball: %s \n", numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],magicBall);

            System.out.println("Do you want to generate new numbers? (yes or no)");
            if(scan.next().equals("yes")) {
                System.out.println("Retaking survey");
            }else{
                System.out.println("Thank you, please come again.");
                reset = true;
            }
        }
    }

    private static int checkLottoRange(int num, int min, int max) {
        while(num>= max + 1 || num <= min - 1) {
            if (num == 0) {
                num += 1;
            } else if (num < min) {
                num *= -1;
            } else if (num >= max + 1) {
                num -= max;
            }
        }
        return num;
    }

    private static int checkRange(Scanner scan, int min, int max) {
        int number;
        while (true) {
            try {
                number = scan.nextInt();
                if( number >= min && number <= max){
                    break;
                }
                System.out.println("Please enter a number between 1 and 50.");

            } catch (InputMismatchException e) {
                System.out.println("Input is not a number. Please re-enter input.");
                scan.nextLine();
            }
        }
        return number;
    }

    private static void checkInput(Scanner scan) {
        while (!scan.hasNextInt()) {
            if(!scan.next().equals("")){
                System.out.println("Input is not a number. Please re-enter input.");
            }
            scan.nextLine();
        }
    }
}

