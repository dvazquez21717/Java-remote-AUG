public class AsciiChars {
    public static void printNumbers() {

        int[] nums = {0,1,2,3,4,5,6,7,8,9};
        System.out.println("Valid digits");
        for(int element : nums){
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static void printLowerCase() {

        char[] lower = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        System.out.println("Valid lowercase");
        for(char element : lower){
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static void printUpperCase() {

        char[] upper = {'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
        System.out.println("Valid uppercase");
        for(char element : upper){
            System.out.print(element + " ");
        }
        System.out.println();
    }
}
