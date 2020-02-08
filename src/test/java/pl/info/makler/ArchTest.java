package pl.info.makler;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("pl.info.makler");

        noClasses()
            .that()
                .resideInAnyPackage("pl.info.makler.service..")
            .or()
                .resideInAnyPackage("pl.info.makler.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..pl.info.makler.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
