package ora.an.d2d.service;


import ora.an.d2d.bean.Module;
import ora.an.d2d.dao.ModuleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleService {

    @Autowired
    private ModuleMapper moduleMapper;

    public List<Module> modules() {
        final List<Module> modules = moduleMapper.modules();
        return modules;
    }

}
