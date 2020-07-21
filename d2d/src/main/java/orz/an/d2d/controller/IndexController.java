package orz.an.d2d.controller;

import com.alibaba.fastjson.JSON;
import orz.an.d2d.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class IndexController {

    @Autowired
    private ModuleService moduleService;


    @RequestMapping(value = "/root")
    @ResponseBody
    public String root() {
        return "root page";
    }


    @RequestMapping(value = "/index")
    public String index(ModelMap map) {

        map.addAttribute("index", "测试标签是否被替换为本段文字1。");


        return "index/index";
    }


    @RequestMapping(value = "/modules")
    @ResponseBody
    public String modules() {
        List list = moduleService.modules();
        return JSON.toJSONString(list);
    }

}
