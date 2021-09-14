package com.hw;

public class VideoGame {
    private String title;
    private String genre;
    private int price;

    public VideoGame(){
        this.title = "Place holder";
        this.genre = "Party-Game";
        this.price = 20;
    }

    public VideoGame(String title, String genre){
        this.title = title;
        this.genre = genre;
    }

    public VideoGame(String title, String genre, int price){
        this.title = title;
        this.genre = genre;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isRPG(){
        if(this.genre.equals("RPG")){
            return true;
        }else{
            return false;
        }
    }

    public void priceCost(){
        System.out.println(this.title + " costs " + this.price +" dollars.");
    }

    public static void main(String[] args){
        VideoGame game = new VideoGame("Final Fantasy", "RPG", 50);
        System.out.println(game.getTitle());
        System.out.println(game.getGenre());
        System.out.println(game.getPrice());
        game.setTitle("Final Fantasy 14");
        System.out.println(game.isRPG());
        game.priceCost();
    }
}




