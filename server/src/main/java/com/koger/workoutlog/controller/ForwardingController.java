package com.koger.workoutlog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Forwards unhandled requests to the frontend, where the Angular router takes over.
 *
 * @author kogerr
 */
@Controller
public class ForwardingController {
    /**
     * Forwards requests to index.html.
     *
     * @return root path
     */
    @RequestMapping("/{path:[^\\.]+$}")
    public String forward() {
        return "forward:/";
    }

}
