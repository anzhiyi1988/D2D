/**
 * @projectName d2d
 * @package ora.an.d2d.controller
 * @className ora.an.d2d.controller.ModelController
 * @copyright anzhy.
 */
package orz.an.d2d.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import orz.an.d2d.bean.ModelGroup;
import orz.an.d2d.service.ModelService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * ModelController
 *
 * @author anzhy
 * @version 1.0
 * @description
 * @date 2020/7/17 14:24
 */
@Controller
@Api(tags = "模型管理")
@RequestMapping(value = "/model")
public class ModelController {

    @Autowired
    ModelService modelService;

    @ApiOperation(value = "获取左侧模型树", notes = "模型管理")
    @GetMapping(path = "/group/tree")
    @ResponseBody
    public List<ModelGroup> getGroupTree() {

        List<ModelGroup> list = modelService.getGroupTree();

        return list;
    }

    @ApiOperation(value = "获取逻辑组列表", notes = "模型管理")
    @GetMapping(path = "logic/group/list")
    @ResponseBody
    public List<ModelGroup> getLogicGroupList() {

        List<ModelGroup> list = modelService.getLogicGroupList();

        return list;
    }


    @ApiOperation(value = "添加组", notes = "模型管理")
    @PostMapping(path = "/group/add")
    @ResponseBody
    public String addModelGroup(ModelGroup modelGroup, HttpServletResponse response) {
        if (modelService.addGroup(modelGroup)) {
            return "ok";
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return "error";
        }
    }
}
