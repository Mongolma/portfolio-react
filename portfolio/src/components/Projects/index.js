import React from 'react';
import weather from '../../images/weather.png';
import workout from '../../images/workout.png';
import burger from '../../images/burger.png';
import schedule from '../../images/schedule.png';
import quiz from '../../images/quiz.png';
import note from '../../images/note.png';
import {ProjectContainer, ProjectCard, ProjectH1, ProjectImage, ProjectP, ProjectWrapper, ProjectH2} from './ProjectElements';

const Projects = () => {
    return (
        <ProjectContainer id='projects'>
            <ProjectH1> Projects </ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectImage src={weather}/>
                    <ProjectH2>Travel assistant</ProjectH2>
                       <ProjectP>bla bal basllkasfo aflkawfou awrdja';lwfri sl;ufj wep[ifrkasfkl ;slifke</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage src={workout}/>
                    <ProjectH2>Workout tracker</ProjectH2>
                       <ProjectP>bla bal basllkasfo aflkawfou awrdja';lwfri sl;ufj wep[ifrkasfkl ;slifke</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage src={burger}/>
                    <ProjectH2>Receive order</ProjectH2>
                       <ProjectP>bla bal basllkasfo aflkawfou awrdja';lwfri sl;ufj wep[ifrkasfkl ;slifke</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage src={schedule}/>
                    
                    <ProjectH2>Day scheduler</ProjectH2>
                       <ProjectP>bla bal basllkasfo aflkawfou awrdja';lwfri sl;ufj wep[ifrkasfkl ;slifke</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage src={quiz}/>
                    <ProjectH2>Code quiz</ProjectH2>
                       <ProjectP>bla bal basllkasfo aflkawfou awrdja';lwfri sl;ufj wep[ifrkasfkl ;slifke</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage src={note}/>
                    <ProjectH2>Note taker</ProjectH2>
                       <ProjectP>bla bal basllkasfo aflkawfou awrdja';lwfri sl;ufj wep[ifrkasfkl ;slifke</ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
