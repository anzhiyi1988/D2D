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
import orz.an.d2d.bean.ModelCode;
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


    @Select("select c_id as id,c_name as name ,c_pid as pid,c_type as type from d2d.t_model_group")
    public List<ModelGroup> getModelGroup();

    @Select("select c_id as id,c_name as name ,c_pid as pid,c_type as type from d2d.t_model_group where c_pid is null")
    List<ModelGroup> getLogicGroupList();

    @Select("select c_id as id,c_name as name ,c_pid as pid from d2d.t_model_group where c_pid = #{pid} ")
    public List<ModelGroup> getModelGroupByPid(String pid);


    @Select("select c_id as id,c_name as name ,c_pid as pid from d2d.t_model_group where c_pid is null ")
    List<ModelGroup> getModelGroupTree();


    int addModelGroup(List<ModelGroup> list);


    int addModelCode(ModelCode modelCode);

    @Select("select c_group_id as groupId,c_id as id ,c_name as name,c_tablename as tableName from d2d.t_model_code where c_group_id = #{groupId} ")
    List<ModelCode> getCodeList(String groupId);
}
