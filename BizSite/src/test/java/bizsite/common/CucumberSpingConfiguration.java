package bizsite.common;

import bizsite.BizSiteApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { BizSiteApplication.class })
public class CucumberSpingConfiguration {}
