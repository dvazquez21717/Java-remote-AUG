package com.tts.IntroSpring.controllers;

import com.tts.IntroSpring.Greeting;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {

    @RequestMapping("/")
    public String home() {
        return "index.html";
    }
    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/about")
    public String about() {
        return "about";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/recommendations")
    public String getRec() {
        return "recommendations";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/contact")
    public String getContact() {
        return "contact";
    }

    @GetMapping("/greeting")
    public String greetingForm(Model model) {
        model.addAttribute("greeting", new Greeting());
        return "greeting";
    }

    @PostMapping("/greeting")
    public String greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
        model.addAttribute("greeting", greeting);
        return "result";
    }
}

