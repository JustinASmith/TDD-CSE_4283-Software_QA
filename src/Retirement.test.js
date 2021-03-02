const {
    Retirement
} = require('./Retirement');

describe('Retirement Class', () => {
    let retirement;

    beforeEach(() => {
        retirement = new Retirement();
    });

    describe('Rounding Utility Function', () => {
        test('rounds 3.14159265 to 3.142 when precision is 3', () => {
            expect(retirement.round(3.14159265, 3)).toBe(3.142);
        });
    });

    describe('Setting Age, Salary, Percent Saved, Savings Goal', () => {
        describe('Age', () => {
            // 'OFF' point
            // less than min age
            test('set age to 0', () => {
                retirement.setAge(0);
                expect(retirement.getAge()).toBe(undefined);
            });

            // 'OFF' point
            // greater than max age
            test('set age to 101', () => {
                retirement.setAge(101);
                expect(retirement.getAge()).toBe(undefined);
            });

            // 'ON' point
            // valid age
            test('set age to 25', () => {
                retirement.setAge(25);
                expect(retirement.getAge()).toBe(25);
            });
        });

        describe('Salary', () => {
            // 'OFF' point
            // less than min salary
            test('set salary to -1', () => {
                retirement.setSalary(-1);
                expect(retirement.getSalary()).toBe(undefined);
            });

            // 'OFF' point
            // greater than max salary
            test('set salary to 500,001', () => {
                retirement.setSalary(500001);
                expect(retirement.getSalary()).toBe(undefined);
            });

            // 'ON' point
            // valid salary
            test('set salary to 500,000', () => {
                retirement.setSalary(500000);
                expect(retirement.getSalary()).toBe(500000);
            });
        });

        describe('Percent Saved', () => {
            // 'OFF' point
            // less than min percent saved
            test('set percent saved to -1%', () => {
                retirement.setPercentSaved(-0.01);
                expect(retirement.getPercentSaved()).toBe(undefined);
            });

            // 'OFF' point
            // greater than max percent saved
            test('set percent saved to 101%', () => {
                retirement.setPercentSaved(1.01);
                expect(retirement.getPercentSaved()).toBe(undefined);
            });

            // 'ON' point
            // valid percent saved
            test('set percent saved to 25%', () => {
                retirement.setPercentSaved(0.25);
                expect(retirement.getPercentSaved()).toBe(0.25);
            });
        });

        describe('Savings Goal', () => {
            // 'OFF' point
            // less than min savings goal
            test('set savings goal to -1', () => {
                retirement.setSavingGoal(-1);
                expect(retirement.getSavingGoal()).toBe(undefined);
            });

            // 'ON' point
            // valid saving goal
            test('set savings goal to 1', () => {
                retirement.setSavingGoal(1);
                expect(retirement.getSavingGoal()).toBe(1);
            });
        });
    });

    /*
        Input Variables: age, salary, percent saved, savings goal
        Input Vector: [A, S, PS, SG]
        Note: S and PS are the only two that are used in 2-D boundary graph
        Spec:
            A -> (0, 100], ε = 1
            S -> [0K, 500,000K], ε = 1
            PS -> [0%, 100%], ε = 1, also written as: [0.0, 1.0], ε = 0.01
            SG -> [0, infinity)
            the data space graph is 2-D with percent saved on y-axis
            and salary on x-axis where percent saved is [0, 100] and salary is [0, 500,000]
        Approach: Weak 1 x 1 for the %saved/salary 2-D graph

        Boundary Points (test cases):
        Off points
        - Valid saving, less than min salary
        - Valid salary, less than min saving
        - Valid saving, greater than max salary
        - Valid salary, greater than max saving

        On points
        - Min saving, valid salary
        - Min salary, valid saving
        - Max saving, valid salary
        - Max salary, valid saving
    */
    describe('18 Year Old with Savings Goal of 1,000,000', () => {
        beforeEach(() => {
            retirement.setAge(18);
            retirement.setSavingGoal(1000000);
        })
        // 'OFF' point
        // Valid saving, less than min salary
        test('0% percent saving, -1 salary has an undefined saving per year, years til and age when goal is met', () => {
            retirement.setPercentSaved(0.0);
            retirement.setSalary(-1);
            expect(retirement.getSavingPerYear()).toBe(undefined);
            expect(retirement.getYearsTilGoal()).toBe(undefined);
            expect(retirement.getAgeGoalMet()).toBe(undefined);
            expect(retirement.isGoalMet()).toBe(false);
        });

        // 'OFF' point
        // Valid salary, less than min saving
        test('-1% saving, 60,000 salary has an undefined saving per year, years til and age when goal is met', () => {
            retirement.setPercentSaved(-0.1);
            retirement.setSalary(60000);
            expect(retirement.getSavingPerYear()).toBe(undefined);
            expect(retirement.getYearsTilGoal()).toBe(undefined);
            expect(retirement.getAgeGoalMet()).toBe(undefined);
            expect(retirement.isGoalMet()).toBe(false);
        });

        // 'OFF' point
        // Valid saving, greater than max salary
        test('25% saving, 500,001 salary has an undefined saving per year, years til and age when goal is met', () => {
            retirement.setPercentSaved(0.25);
            retirement.setSalary(500001);
            expect(retirement.getSavingPerYear()).toBe(undefined);
            expect(retirement.getYearsTilGoal()).toBe(undefined);
            expect(retirement.getAgeGoalMet()).toBe(undefined);
            expect(retirement.isGoalMet()).toBe(false);
        });

        // 'OFF' point
        // Valid salary, greater than max saving
        test('101% saving, 80,000 salary has an undefined saving per year, years til and age when goal is met', () => {
            retirement.setPercentSaved(1.01);
            retirement.setSalary(80000);
            expect(retirement.getSavingPerYear()).toBe(undefined);
            expect(retirement.getYearsTilGoal()).toBe(undefined);
            expect(retirement.getAgeGoalMet()).toBe(undefined);
            expect(retirement.isGoalMet()).toBe(false);
        });

        // 'ON' point
        // Min saving, valid salary
        test('0% saving, 80,000 salary has a 0 saving per year, undefined years til and age when goal is met', () => {
            retirement.setPercentSaved(0.0);
            retirement.setSalary(80000);
            expect(retirement.getSavingPerYear()).toBe(0);
            expect(retirement.getYearsTilGoal()).toBe(undefined);
            expect(retirement.getAgeGoalMet()).toBe(undefined);
            expect(retirement.isGoalMet()).toBe(false);
        });

        // 'ON' point
        // Min salary, valid saving
        test('15% saving, 0 salary has a 0 saving per year, undefined years til and age when goal is met', () => {
            retirement.setPercentSaved(0.15);
            retirement.setSalary(0);
            expect(retirement.getSavingPerYear()).toBe(0);
            expect(retirement.getYearsTilGoal()).toBe(undefined);
            expect(retirement.getAgeGoalMet()).toBe(undefined);
            expect(retirement.isGoalMet()).toBe(false);
        });

        // 'ON' point
        // Max saving, valid salary
        test('100% saving, 25,000 salary has a 33,750 saving per year, 48 years til met and age of 48 when goal is met', () => {
            retirement.setPercentSaved(1.0);
            retirement.setSalary(25000);
            expect(retirement.getSavingPerYear()).toBe(33750);
            expect(retirement.getYearsTilGoal()).toBe(30);
            expect(retirement.getAgeGoalMet()).toBe(48);
            expect(retirement.isGoalMet()).toBe(true);
        });

        // 'ON' point
        // Max salary, valid saving
        test('10% saving, 500,000 salary has a 67,500 saving per year, 15 years til goal met and age of 33 when goal is met', () => {
            retirement.setPercentSaved(0.1);
            retirement.setSalary(500000);
            expect(retirement.getSavingPerYear()).toBe(67500);
            expect(retirement.getYearsTilGoal()).toBe(15);
            expect(retirement.getAgeGoalMet()).toBe(33);
            expect(retirement.isGoalMet()).toBe(true);
        });
    });
});