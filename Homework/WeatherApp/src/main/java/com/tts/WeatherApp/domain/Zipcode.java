package com.tts.WeatherApp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Zipcode {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public Zipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    private String zipcode;

    @Override
    public String toString() {
        return "Zipcode{" +
                "id=" + id +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }



    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }




}
