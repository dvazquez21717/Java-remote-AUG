public class MagicCalculator extends Calculator {
    public double squareRoot(double num1){
        return Math.sqrt(num1);
    }

    public double sin(double num1){
        return Math.sin(num1);
    }

    public double cosine(double num1){
        return Math.cos(num1);
    }

    public double tangent(double num1){
        return Math.tan(num1);
    }

    public int factorial(int num){
        if (num == 0){
            return 1;
        }else {
            return (num * factorial(num -1));
        }
    }

/*
    public static void main(String[] args){
        MagicCalculator cal = new MagicCalculator();
        System.out.println(cal.tangent(4));
    }
*/
}
