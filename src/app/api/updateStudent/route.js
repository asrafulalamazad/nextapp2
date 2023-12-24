// pages/api/students/[id]/update.js

import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
    const studentId = parseInt(req.query.id);

    if (req.method === 'PUT') {
        const { firstName, lastName, age, grade, courses } = req.body;

        const updatedStudent = await prisma.student.update({
            where: { id: studentId },
            data: { firstName, lastName, age, grade, courses },
        });

        res.status(200).json(updatedStudent);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
