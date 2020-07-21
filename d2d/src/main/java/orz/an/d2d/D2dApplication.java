package orz.an.d2d;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan({"orz.an.d2d.dao"})
@SpringBootApplication
public class D2dApplication {

    public static void main(String[] args) {
        SpringApplication.run(D2dApplication.class, args);
    }

}
