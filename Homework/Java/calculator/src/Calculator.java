public class Calculator {
    public int add(int num1, int num2){
        return num1 + num2;
    }

    public int subtract(int num1, int num2){
        return num1 - num2;
    }

    public int multiply(int num1, int num2){
        return num1 * num2;
    }

    public int divide(int num1, int num2){
        if (num2 == 0){
            System.out.println("Error: undefined");
            return 0;
        }else {
            return num1 / num2;
        }
    }

    public int square(int num1, int num2){
        int result = 1;
        for(int i = 0; i < num2; i++){
            result = result * num1;
        }
        return result;
    }

//    public static void main(String[] args){
//        Calculator cal = new Calculator();
//        System.out.println(cal.divide(7,0));
//    }
}
