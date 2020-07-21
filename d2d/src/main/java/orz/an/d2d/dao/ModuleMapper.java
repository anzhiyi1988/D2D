package orz.an.d2d.dao;


import orz.an.d2d.bean.Module;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Mapper
public interface ModuleMapper {


    @Select("select  c_id  as id,c_name as name ,c_url as url ,dt_updatetime as updatetime,c_pid_id as pic from config_module")
    List<Module> modules();

}
