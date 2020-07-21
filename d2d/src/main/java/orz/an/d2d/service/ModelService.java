/**
 * @projectName d2d
 * @package orz.an.d2d.service
 * @className orz.an.d2d.service.ModelService
 * @copyright anzhy.
 */
package orz.an.d2d.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orz.an.d2d.bean.ModelGroup;
import orz.an.d2d.dao.ModelMapper;
import orz.an.d2d.util.Const;

import java.util.*;

/**
 * ModelService
 *
 * @author anzhy
 * @version 1.0
 * @description
 * @date 2020/7/20 14:29
 */
@Service
public class ModelService {

    @Autowired
    private ModelMapper modelMapper;


    public boolean addGroup(ModelGroup modelGroup) {

        List<ModelGroup> list = new ArrayList<>();

        String uuid = UUID.randomUUID().toString().replace("-", "");
        System.out.println(uuid);
        modelGroup.setId(uuid);
        modelGroup.setType(Const.LogicGroup);

        String uuid1 = UUID.randomUUID().toString().replace("-", "");
        ModelGroup modelGroup1 = new ModelGroup();
        modelGroup1.setName("业务代码");
        modelGroup1.setId(uuid1);
        modelGroup1.setPid(uuid);
        modelGroup1.setType(Const.CodeGroup);

        String uuid2 = UUID.randomUUID().toString().replace("-", "");
        ModelGroup modelGroup2 = new ModelGroup();
        modelGroup2.setName("业务模型（SMD）");
        modelGroup2.setId(uuid2);
        modelGroup2.setPid(uuid);
        modelGroup2.setType(Const.ModelGroup);

        list.add(modelGroup);
        list.add(modelGroup1);
        list.add(modelGroup2);

        try {

            modelMapper.addModelGroup(list);
            return true;
        } catch (RuntimeException e) {
            System.out.println(e);
            e.printStackTrace();
            return false;
        }

    }

    public List<ModelGroup> getGroupTree() {

        List<ModelGroup> list = modelMapper.getModelGroup();
        List<ModelGroup> tree = new ArrayList<>();
        Map<String, ModelGroup> map = new HashMap<>();

        list.forEach(o -> {
            String id = o.getId();
            String pid = o.getPid();
            if (StringUtils.isBlank(pid)) {
                map.put(id, o);
                tree.add(o);
            }
        });

        list.forEach(o -> {
            String pid = o.getPid();
            if (map.containsKey(pid)) {
                map.get(pid).getChild().add(o);
            }
        });

        return tree;
    }

    public List<ModelGroup> getLogicGroupList() {
        return modelMapper.getLogicGroupList();
    }
}

