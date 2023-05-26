import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

// 강의 컴포넌트
const CourseCard: React.FC<{ title: string; instructor: string; rating: number }> = ({
                                                                                         title,
                                                                                         instructor,
                                                                                         rating,
                                                                                     }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">강사: {instructor}</Typography>
                <Typography variant="body2">평점: {rating}</Typography>
            </CardContent>
        </Card>
    );
};

// 팀 멤버 컴포넌트
const TeamMemberCard: React.FC<{ name: string; role: string }> = ({ name, role }) => {
    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center">
                    <Avatar />
                    <Box marginLeft={2}>
                        <Typography variant="h6">{name}</Typography>
                        <Typography variant="body2">{role}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

const HomePage: React.FC = () => {
    // 임시로 사용될 인기 강의 데이터
    const courses = [
        { title: "부동산 기초 이해", instructor: "김OO", rating: 5 },
        { title: "부동산 투자 전략", instructor: "박OO", rating: 4.5 },
        { title: "부동산 시장 분석", instructor: "이OO", rating: 4.7 }
    ];

    // 임시로 사용될 팀 멤버 데이터
    const teamMembers = [
        { name: "김OO", role: "CEO" },
        { name: "박OO", role: "CTO" },
        { name: "이OO", role: "COO" }
    ];

    return (
        <Box padding={4}>
            <Typography variant="h2" gutterBottom>부동산 융합 아카데미에 오신 것을 환영합니다!</Typography>
            <Typography variant="body1" gutterBottom>
                부동산 융합 아카데미는 다양한 부동산 관련 교육을 제공합니다. 로드맵을 확인하고, 강의를 검색해보세요!
            </Typography>
            <Box display="flex" justifyContent="space-between" marginBottom={4}>
                <Button variant="outlined" component={Link} to="/roadmap">로드맵 확인하기</Button>
                <Button variant="outlined" component={Link} to="/courses">강의 검색하기</Button>
            </Box>

            <Typography variant="h4" gutterBottom>인기 있는 강의</Typography>
            <Grid container spacing={4}>
                {courses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CourseCard title={course.title} instructor={course.instructor} rating={course.rating} />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>우리 팀</Typography>
            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <TeamMemberCard name={member.name} role={member.role} />
                    </Grid>
                ))}
            </Grid>

            {/* 추가할 요소를 이곳에 추가합니다 */}

        </Box>
    );
};

export default HomePage;
