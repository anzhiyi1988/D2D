/**
 * @projectName d2d
 * @package ora.an.d2d.bean
 * @className ora.an.d2d.bean.ModelGroup
 * @copyright anzhy.
 */
package orz.an.d2d.bean;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * ModelGroup
 *
 * @author anzhy
 * @version 1.0
 * @description 模型分组实体
 * @date 2020/7/20 11:15
 */

@Data
public class ModelGroup {
    String id;
    String name;
    String pid;
    String type;
    List<ModelGroup> child = new ArrayList<>();
}
