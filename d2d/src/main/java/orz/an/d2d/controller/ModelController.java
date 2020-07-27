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
import org.springframework.web.bind.annotation.*;
import orz.an.d2d.bean.ModelCode;
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
    @GetMapping(path = "/group/list")
    @ResponseBody
    public List<ModelGroup> getGroupList() {

        List<ModelGroup> list = modelService.getLogicGroupList();

        return list;
    }


    @ApiOperation(value = "添加组", notes = "模型管理")
    @PostMapping(path = "/group/add")
    @ResponseBody
    public String addGroup(@RequestBody ModelGroup modelGroup, HttpServletResponse response) {
        if (modelService.addGroup(modelGroup)) {
            return "ok";
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return "error";
        }
    }


    @ApiOperation(value = "添加代码", notes = "模型管理")
    @PostMapping(path = "/code/add")
    @ResponseBody
    public String addCode(@RequestBody ModelCode modelCode, HttpServletResponse response) {
        if (modelService.addCode(modelCode)) {
            return "ok";
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return "error";
        }
    }

    @ApiOperation(value = "获取代码列表", notes = "模型管理")
    @GetMapping(path = "/code/list")
    @ResponseBody
    public List<ModelCode> getGroupList(String groupId) {

        List<ModelCode> list = modelService.getCodeList(groupId);

        return list;
    }

}
