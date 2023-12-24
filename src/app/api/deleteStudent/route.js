// pages/api/students/[id]/delete.js

import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
    const studentId = parseInt(req.query.id);

    if (req.method === 'DELETE') {
        const deletedStudent = await prisma.student.delete({
            where: { id: studentId },
        });

        res.status(200).json(deletedStudent);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
