/**
 * @projectName d2d
 * @package ora.an.d2d.controller
 * @className ora.an.d2d.controller.ModelController
 * @copyright anzhy.
 */
package ora.an.d2d.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * ModelController
 *
 * @author anzhy
 * @version 1.0
 * @description
 * @date 2020/7/17 14:24
 */
@Controller
@RequestMapping(value = "/model")
public class ModelController {

    @RequestMapping(value = "/group/list")
    @ResponseBody
    public List<Map<String, String>> getGroupList() {


        List<Map<String, String>> list = new ArrayList<>();

        Map<String, String> a = new HashMap<>();
        a.put("id", "1");
        a.put("name", "中央信访原始库");
        a.put("readme", "中央信访原始库");
        Map<String, String> b = new HashMap<>();
        b.put("id", "2");
        b.put("name", "中央信访标准库");
        b.put("readme", "中央信访标准库");
        Map<String, String> c = new HashMap<>();
        c.put("id", "3");
        c.put("name", "中央信访主题库");
        c.put("readme", "中央信访主题库");
        list.add(a);
        list.add(b);
        list.add(c);
        return list;
    }


    @RequestMapping(value = "/group/tree")
    @ResponseBody
    public String getGroupTree() {


        return "root page";
    }


}
