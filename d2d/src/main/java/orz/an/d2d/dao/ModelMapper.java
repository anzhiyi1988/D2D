/**
 * @projectName d2d
 * @package ora.an.d2d.dao
 * @className ora.an.d2d.dao.ModelGroupMapper
 * @copyright anzhy.
 */
package orz.an.d2d.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import orz.an.d2d.bean.ModelGroup;

import java.util.List;

/**
 * ModelGroupMapper
 *
 * @author anzhy
 * @version 1.0
 * @description 模型组的mapper
 * @date 2020/7/20 11:18
 */
@Mapper
@Repository
public interface ModelMapper {


    @Select("select c_id as id,c_name as name ,c_pid as pid,c_type as type from d2d.t_modelgroup")
    public List<ModelGroup> getModelGroup();

    @Select("select c_id as id,c_name as name ,c_pid as pid,c_type as type from d2d.t_modelgroup where c_pid is null")
    List<ModelGroup> getLogicGroupList();

    @Select("select c_id as id,c_name as name ,c_pid as pid from d2d.t_modelgroup where c_pid = #{pid} ")
    public List<ModelGroup> getModelGroupByPid(String pid);


    @Select("select c_id as id,c_name as name ,c_pid as pid from d2d.t_modelgroup where c_pid is null ")
    List<ModelGroup> getModelGroupTree();


    public int addModelGroup(List<ModelGroup> list);


}
